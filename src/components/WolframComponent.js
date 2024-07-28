import React, { useState, useEffect } from 'react';
import { calculateCharacteristicPolynomial, calculateDeterminant, calculateEigenvalues } from '../WolframMatrix/wolfram-example.js';
import { generateCyclicMatrix } from '../WolframMatrix/matrix-generators.js';

const WolframComponent = ({ numNodes }) => {
  const [matrixData, setMatrixData] = useState({
    determinant: null,
    eigenValues: null,
    characteristicPolynomial: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let matrix = generateCyclicMatrix(numNodes);

        const determinant = await calculateDeterminant(matrix);
        const eigenValues = await calculateEigenvalues(matrix);
        const characteristicPolynomial = await calculateCharacteristicPolynomial(matrix);

        setMatrixData({
          determinant,
          eigenValues,
          characteristicPolynomial,
          loading: false,
          error: null
        });
      } catch (error) {
        setMatrixData({
          determinant: null,
          eigenValues: null,
          characteristicPolynomial: null,
          loading: false,
          error: error.message
        });
      }
    };

    fetchData();
  }, [numNodes]);

  const { determinant, eigenValues, characteristicPolynomial, loading, error } = matrixData;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h6>Determinant: {determinant}</h6>
      <br />
      <h6>Eigenvalues: {eigenValues}</h6>
      <br />
      <h6>Characteristic Polynomial: {characteristicPolynomial}</h6>
    </div>
  );
};

export default WolframComponent;
