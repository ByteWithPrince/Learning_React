import ComponentC from "./ComponentC";

function ComponentB() {
    return (
        <div>
            <div className="box">
                <h1>ComponentB</h1>
                <ComponentC />
            </div>
        </div>
    );
}

export default ComponentB;