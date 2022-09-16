

type Props = {
    title: string,
    onclick: () => void,
    className: string
}

export function Button(props: Props){

    return <button className={`${props.className}`} onClick={props.onclick}>{props.title}</button>
}