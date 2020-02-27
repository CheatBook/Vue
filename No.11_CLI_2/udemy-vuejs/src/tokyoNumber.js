export const tokyoNumber = {
    data() {
        return {
            tatile: "Welcome to Tokyo",
            subTitle: "Tokyo is great city"
        }
    },
    filters: {
        lowerCase(value) {
            return value.toLowerCase()
        }
    }
}