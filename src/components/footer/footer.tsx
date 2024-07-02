import globals from "@/styles/globals.module.scss";
import "@/app/globals.css"
function footer() {
    return (
        <div className={globals["grid"]}>
            <div className={globals["grid__row"]}>
                <div className={globals["footer"]}>
                    footer
                </div>
            </div>
        </div>
    );
}

export default footer;