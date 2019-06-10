export function enums_2() {
    enum Format {
        Long = 1,
        Short,
    }

    function formatDate(d: Date, format: Format) {
        switch (format) {
            case Format.Long:
                return d.toString();
            case Format.Short:
                return d.toJSON();
        }
    }

    console.log(formatDate(new Date(), Format.Long));
    console.log(formatDate(new Date(), Format.Short));
}