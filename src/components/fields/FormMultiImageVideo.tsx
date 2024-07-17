import { Controller } from "react-hook-form";
import MultiImageVideoInput from "./MultiImageVideoInput";
import strings from "../../i18n/strings";

const FormMultiImageVideo = (props: any) => {
    const { name, control, required, ...inputProps } =
        props;
    const rules: any = {};
    if (required) {
        if (typeof required === "string") {
            rules.required = required;
        } else {
            rules.required = `${inputProps.label ? `${inputProps.label} is` : ""
                } ${strings.required}`;
        }
    }

    return (
        <Controller
            control={control}
            {...(Object.keys(rules).length > 0
                ? {
                    rules,
                }
                : { rules: undefined })}
            rules={rules}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => {
                const on_Change = (e: any) => {
                    onChange(e);
                };
                return (
                    <MultiImageVideoInput
                        onChange={on_Change}
                        value={value}
                        error={error}
                        required={rules.required ? true : false}
                        {...inputProps}
                    />
                );
            }}
            name={name}
        />
    );
};
export default FormMultiImageVideo;