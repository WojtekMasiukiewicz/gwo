import styled from 'react-emotion'

export const Button: any = styled('button')((props: any) => ({
    padding: 5,
    border: 'none',
    background: props.red ? '#f44336' : '#8BC34A',
    fontSize: 17,
    width: 100,
    boxShadow: '1px 1px 1px #000',
    ':hover': {
        background: props.red ? '#EF9A9A' : '#AED581',
        cursor: 'pointer'
    }
}))