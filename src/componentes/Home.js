function Home(props)
 {
    return
    <Router>
            <div className="row">
        {this.state.productos.map((producto) => (
          <Producto
            key={producto.id}
            value={producto}
            onClick2={() => this.manejador(producto)}
          />
        ))}
      </div>
    </Router>

    manejador(p);
        const nuevoCarrito=[...this.state.carrito];
        nuevoCarrito.push[p];
        this.setState({'carrito':nuevoCarrito})
    }

 

 export default App;


      
    
