import React, { Component } from "react";

function refreshPage() {
    window.location.reload(false);
  }

export default class ErrorBoundaries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: "",
      errorInfo: "",
    };
  }



  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  

  render() {

    
    if (this.state.hasError) {
      return (

        <section className='bg-gray-100 dark:bg-gray-800 dark:text-white w-full wrap overflow-hidden overflow-x-hidden'> 
    <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                </div>

             
            </div>


            <div className="flex flex-col justify-center items-center">
                    <h1> Sorry Country not found  </h1>
                     <button className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg mt-8" onClick={refreshPage}>  <i className="fa fa-arrow-left"/>  Go Back </button>
                     </div>

        
        </section>
        
        
         
           
     
         
        
      );
    } else {
      return this.props.children;
    }
  }
}
