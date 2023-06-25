import { Component, ReactElement } from "react"

export class DiceContext {
    constructor(
        readonly test: Something
    ) {

    }
}

/**
 * This component respresents one individual dice.
 */
export class Dice extends Component<DiceProp, DiceState> {
    /**
     * The constructor saves current value from the prop.
     */
    constructor(props: DiceProp) {
        super(props)
        this.state = {
            currentValue: props.value,
            animationInterval: null,
            animationTimeout: null,
            animationDone: true,
        }
    }
    /**
     * This function starts the animation.
     */
    startAnimation(): void {
        // If component supposed to be animated:
        if (this.props.animated) {
            let currentIndex = 0
            // Generate shuffled array of values:
            const randomValues: number[] = [
                1, 2, 3, 4, 5, 6
            ].sort(() => Math.random() - 0.5);
            // Update values for 2 seconds:
            const updateInterval = setInterval(() => {
                // Set current value from the array:
                this.setState({
                    currentValue: randomValues[currentIndex++]
                })
                // Reset index if out of boundary:
                if (currentIndex === randomValues.length) {
                    currentIndex = 0;
                }
            }, 100)
            // Set final result after 2 seconds:
            const endTimeout = setTimeout(() => {
                this.setState({
                    currentValue: this.props.value
                })
                clearInterval(updateInterval)
            }, 2000)
            this.setState({
                animationInterval: updateInterval,
                animationTimeout: endTimeout,
            })
        }
    }
    /**
     * This function stops the animation.
     */
    stopAnimation = (callback?: () => void): void => {
        if (this.state.animationInterval) {
            clearInterval(this.state.animationInterval)
        }
        if (this.state.animationTimeout) {
            clearTimeout(this.state.animationTimeout)
        }
        this.setState(
            {
                animationInterval: null,
                animationTimeout: null,
            },
            callback
        )
    }
    // Start animation on mount:
    componentDidMount(): void {
        this.startAnimation()
    }
    // Update props for current object:
    componentDidUpdate(prevProps: Readonly<DiceProp>): void {
        // Update current value if prop was changed:
        if (this.props.value !== prevProps.value) {
            this.setState(
                { currentValue: this.props.value },
                this.startAnimation
            );
        }
        if (this.props.gameCounter !== prevProps.gameCounter) {
            this.startAnimation()
        }
    }
    // Stop animation on unmount:
    componentWillUnmount(): void {
        this.stopAnimation()
    }
    render(): ReactElement {
        return (
            <div className={`dice dice-number-${this.state.currentValue}`}></div>
        );
    }
}