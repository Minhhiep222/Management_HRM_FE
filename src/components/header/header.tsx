import globals from "@/styles/globals.module.scss";
import "@/app/globals.css"
function header() {
    return (
        <div className={globals["grid"]}>
            <div className={globals["grid__row"]}>
                <div className={globals["header"]}>
                    Header
                </div>
            </div>
        </div>
    );
}

export default header;