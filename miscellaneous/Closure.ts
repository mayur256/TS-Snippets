/** An Example to demonstrate data encapsulation and
 * hiding implementation details using closures in javascript
*/

const counter = (
    function () {
        // data member
        let privateVar = 0;

        // private method(s)
        function modifyPrivateVar(delta: number): void {
            privateVar += delta;
        }

        // public methods
        return {
            increment: function (incFactor: number): void {
                modifyPrivateVar(incFactor);
            },

            decrement: function (decFactor: number): void {
                modifyPrivateVar(decFactor);
            },

            // returns value of the private variable
            value: function (): number {
                return privateVar;
            }
        }
    }
)();

counter.increment(2);
console.log(counter.value()); // privateVar = 2
