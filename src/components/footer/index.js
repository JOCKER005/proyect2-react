import Aicon from "../nav/Aicon"


function Foo() {

    return(
        <footer>
            <div className="container">
                <div className="row gx-0 justify-content-between fixed-bottom" >
                    <Aicon
                    className="col-1 text-center bi  "
                    icon="bi-calendar-check"
                    href="/"
                    />
                    <Aicon
                    className="col-1 text-center bi "
                    icon="bi-geo-alt"
                    href="/"
                    />
                </div>
            </div>
        </footer>
    )
}

export default Foo;