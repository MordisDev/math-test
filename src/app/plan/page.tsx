import { List, ListItemText } from "@mui/material"

export default function Home() {
    return (
      <body>
        <List>
            <ListItemText>Konfiguracja</ListItemText>
            <List>
                <ListItemText>Liczba dzialan</ListItemText>
                <ListItemText>Liczba zmiennych</ListItemText>
                <ListItemText>Rodzaje dzialan</ListItemText>
            </List>
            <ListItemText>Lepsza historia (local storage?)</ListItemText>
            <ListItemText>Achivki</ListItemText>
            <ListItemText>Wyzwanie czasowe (jedno po drugim)</ListItemText>
            <ListItemText>Wyzwanie ze zwiekszajacym sie poziomem trudnosci</ListItemText>
            <ListItemText>Lokalizacja (different language versions)</ListItemText>
        </List>
      </body>
    )
}