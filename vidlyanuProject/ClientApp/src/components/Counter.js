import React, { Component } from 'react';

class Counter extends Component {
    state = {

       

    }
   


    render() {
        const item = (x) => {

           const  var1 = 0;
            const var2 = 1;
            const  var3;

           

            for (var i = 3; i <= x; i++) {
                var3 = var1 + var2;
                var1 = var2;
                var2 = var3;

                document.write(var3 + "<br />");
            }


        }

        return (<div>
            <h1>{item}</h1>
            
        </div>
        );
    }
}

export default loginForm;