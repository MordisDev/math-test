import { List, ListItemText } from "@mui/material"

export default function Home() {
    return (
      <body>
        <List>
            <ListItemText>Filtry</ListItemText>
            <List>
                <ListItemText>Liczba dzialan</ListItemText>
                <ListItemText>Liczba zmiennych</ListItemText>
                <ListItemText>Rodzaje dzialan</ListItemText>
            </List>
            <ListItemText>Lepsza historia (local storage?)</ListItemText>
            <ListItemText>Achivki</ListItemText>
            <ListItemText></ListItemText>
            <ListItemText></ListItemText>
            <ListItemText></ListItemText>
        </List>
      </body>
    )
}