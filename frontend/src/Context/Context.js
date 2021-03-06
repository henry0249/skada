import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = { 
        isFalse: false,
        hide: false,
        display:false,
        paydrop : false,
        logoutModal: false
    }

    handlePayDrop = () => {
        this.setState({paydrop:!this.state.paydrop})
    }
    handleSide = () => {
        this.setState({isFalse:!this.state.isFalse})
    }

    handleHide = () => {
        this.setState({hide:!this.state.hide})
    }

    handleDisplay = () => {
        this.setState(prevState => ({ display: !prevState.display }))
    }

    handleLogModal=()=>{
        this.setState({logoutModal:!this.state.logoutModal})
    }
    render() { 
        return ( 
            <ProductContext.Provider  value={{
                isFalse:this.state.isFalse,
                side:this.handleSide,
                hidden : this.state.hide,
                hide:this.handleHide,
                display:this.state.display,
                dis:this.handleDisplay,
                paydrop:this.state.paydrop,
                handlePayDrop:this.handlePayDrop,
                handleLogModal:this.handleLogModal,
                logout:this.state.logoutModal
            }}>
                {this.props.children}
            </ProductContext.Provider>
         );
    }
}

 
const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };

export default ProductProvider;