import styles from './page.module.css'

export default function Home() {
    return (
      <main>
        <ol className={styles.orderedList}>
            <li>
              <span>Generatory</span>
              <ul>
                <li>Dodawanie</li>
                <li>Odejmowanie</li>
                <li>Dodawanie + Odejmowanie</li>
                <li>Mnozenie</li>
                <li>Dzielenie</li>
                <li>Mnozenie + Dzielenie</li>
                <li>Wszystkie 4</li>
                <li>Wszystkie 4 z nawiasami (kolejność wykonywania działań)</li>
            </ul>
            </li>
            
            <li>Konfiguracja</li>
            <ul>
                <li>Liczba dzialan</li>
                <li>Liczba zmiennych</li>
                <li>Rodzaje dzialan</li>
            </ul>
            <li>Poprawny wynik przy bledzie</li>
            <li>Poziomy</li>
            <li>Potwierdzenie wynikow</li>
            <li>Lepsza historia (local storage?)</li>
            <li>Achivki</li>
            <li>Wyzwanie czasowe (jedno po drugim)</li>
            <li>Wyzwanie ze zwiekszajacym sie poziomem trudnosci</li>
            <li>Lokalizacja (different language versions)</li>
        </ol>
      </main>
    )
}