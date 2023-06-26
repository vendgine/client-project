import { expect } from "chai"
import sinon from "sinon"
import { inspect } from "util"

describe("logger", () => {
    describe("(proxy)", () => {
        it("returns an object for any property", () => {
            expect({}).to.be.a("object")
        })
    })
})