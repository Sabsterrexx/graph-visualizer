import { calculateCharacteristicPolynomial, calculateDeterminant, calculateEigenvalues } from '../WolframMatrix/wolfram-example.js';
import { generateCyclicMatrix } from '../WolframMatrix/matrix-generators.js';

const WolframComponent = async ({ numNodes }) => {

    let matrix = generateCyclicMatrix(numNodes);
    let determinant = calculateDeterminant(matrix);
    let eigenValues = calculateEigenvalues(matrix);
    let characteristicPolynomial = calculateCharacteristicPolynomial(matrix);

    return (
        <div>
            <h6>Determinant: {determinant}</h6>
            <br></br>
            <h6>Eigenvalues: {eigenValues} </h6>
            <br></br>
            <h6>Characteristic Polynomial: {characteristicPolynomial}</h6>
        </div>
    )


}

export default WolframComponent;