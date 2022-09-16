

type Input = {
    type: string,
    onClick: () => void,
    className: string
}

export function Input(props: Input){
    return <input {...props}></input>
}