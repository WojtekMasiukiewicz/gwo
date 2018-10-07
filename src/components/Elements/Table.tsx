import styled from 'react-emotion'

export const Table = styled('table')({
    margin: 'auto',
    textAlign: 'center',
    borderSpacing: 0
})
export const Row = styled('tr')({
    ':nth-child(even)': {
        background: '#eee'
    },
    ':nth-child(odd)': {
        background: '#ddd'
    },
    ':hover': {
        background: '#aaa'
    }
})
export const HeaderCell = styled('td')({
    background: '#ffcc80',
    padding: '5px 10px'
})
export const Cell = styled('td')({
    padding: 3
})