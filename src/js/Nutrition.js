import React from "react";

function Nutrition(){
    return(
        <div className = "container headerWrap">
            <div className = "header">
                <h3>Nutritian Fact</h3>
                <table>
                    <tbody>
                    <tr className = "largeBorder">
                        <td><strong>Serving Size</strong></td>
                        <td>100g</td>
                    </tr>
                    <tr className = "largeBorder">
                        <td>
                            <span><strong>Amount Per Serving</strong></span><br/>
                            <h3>Calories</h3>
                        </td>
                        <td>
                            <h3>89</h3>
                        </td>
                    </tr>
                    <tr className = "smallBorder">
                        <td/>
                        <td><strong>% Daily Value</strong></td>
                    </tr>
                    <tr className = "smallBorder">
                        <td>
                            <span> <strong>Total fat </strong> 0.3g</span>
                        </td>
                        <td>
                            <strong>0 %</strong>
                        </td>
                    </tr>
                    <tr className = "smallBorder subList">
                        <td>
                            Saturated Fat 0.1g
                        </td>
                        <td>
                            <strong>0 %</strong>
                        </td>
                    </tr>
                    <tr className = "smallBorder">
                        <td>
                            <span> <strong>Sodium</strong> 1mg</span>
                        </td>
                        <td>
                            <strong>0 %</strong>
                        </td>
                    </tr>
                    <tr className = "smallBorder">
                        <td>
                            <span> <strong>Total carbohydrate</strong> 23g</span>
                        </td>
                        <td>
                            <strong> 8 %</strong>
                        </td>
                    </tr>
                    <tr className = "smallBorder subList">
                        <td>
                            Dietary Fiber 2.6g
                        </td>
                        <td>
                            <strong>9 %</strong>
                        </td>
                    </tr>
                    <tr className = "smallBorder subList">
                        <td>
                            Sugar 12g
                        </td>
                        <td/>
                    </tr>
                    <tr className = "largeBorder">
                        <td>
                            <span> <strong>Protein</strong> 1.8g</span>
                        </td>
                        <td><strong>2 %</strong></td>
                    </tr>
                    <tr className = "smallBorder">
                        <td>
                            Vitamin D 0.00mcg
                        </td>
                        <td> 0 %</td>
                    </tr>
                    <tr className = "smallBorder">
                        <td>
                            Calcium 5.00mg
                        </td>
                        <td> 0 % </td>
                    </tr>
                    <tr className = "largeBorder">
                        <td>
                            Iron0.26mg
                        </td>
                        <td>1 %</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Nutrition;
