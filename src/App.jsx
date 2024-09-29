// src/App.jsx
import Card from './Card';
import './App.css'; // Si tienes estilos generales

function App() {
  return (
    <div className="App">
      <h1>Belleza natural</h1>
      <div className="card-container">
        <Card
          title="Vistas maravillosas"
          description="Aprecia el hermoso atardecer desde la montaña."
          image="https://media.istockphoto.com/id/155288168/photo/max-patch-sunset.jpg?s=612x612&w=0&k=20&c=kS0FyNaQguD3PhpYnvfl6SbYtJw0CiItKDxx5lDxGU4=" // Usa tu propia imagen aquí
        />
        <Card
          title="NYC"
          description="Admira la ciudad de Nueva York desde el aire."
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/a4/59/20/photo5jpg.jpg?w=1200&h=-1&s=1" // Usa tu propia imagen aquí
        />
      </div>
    </div>
  );
}

export default App;
