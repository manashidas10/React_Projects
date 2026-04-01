import './App.css'
import { Button } from './components/Button'
import { Toggle, TextMirror } from './components/StateManager'
import { HoverBox } from './components/HoverBox'
import { TrafficLight } from './components/TrafficLight'
import { TodoList } from './components/TodoList'

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Day 2 Assignments</h1>
        <p className="subtitle">Mastering Props, State, Events, Rendering, and Lists</p>
      </header>

      <main className="card-grid">
        {/* Exercise 1: Props */}
        <section className="exercise-card">
          <h3>1. Props & Ref Props</h3>
          <p className="exercise-desc">Passing data from a parent to a child.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button label="Solid Blue" color="#3b82f6" />
            <Button label="Vibrant Red" color="#ef4444" />
            <Button label="Success Green" color="#22c55e" />
          </div>
        </section>

        {/* Exercise 2: Managing State */}
        <section className="exercise-card">
          <h3>2. Managing State (useState)</h3>
          <p className="exercise-desc">Allowing components to "remember" things.</p>
          <Toggle />
          <TextMirror />
        </section>

        {/* Exercise 3: Event Handling */}
        <section className="exercise-card">
          <h3>3. Event Handling</h3>
          <p className="exercise-desc">Using camelCase (e.g., onMouseEnter/onMouseLeave).</p>
          <HoverBox />
        </section>

        {/* Exercise 4: Conditional Rendering */}
        <section className="exercise-card">
          <h3>4. Conditional Rendering</h3>
          <p className="exercise-desc">Deciding what to show based on logic.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <TrafficLight color="red" />
            <TrafficLight color="yellow" />
            <TrafficLight color="green" />
          </div>
        </section>

        {/* Exercise 5: Lists & Keys */}
        <section className="exercise-card" style={{ gridColumn: 'span 1' }}>
          <h3>5. Lists & Keys</h3>
          <p className="exercise-desc">Using unique IDs vs Index as keys tracking changes.</p>
          <TodoList />
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Antigravity - Advanced Agentic Coding Assignments</p>
      </footer>
    </div>
  )
}

export default App
