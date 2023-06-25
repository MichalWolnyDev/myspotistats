export {};

declare global {
    interface ClickFunction {
        onClick: (params: any) => any
    }
}