import styled from 'styled-components';

// Container for form with futuristic padding and layout
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Form styling
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(15, 22, 36, 0.8);
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 700px;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 0.2rem;
  font-weight: 500;

  /* Red asterisk for required fields */
  &::after {
    content: ' *';
    color: #ff4444;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

// Input Fields
export const Input = styled.input`
  padding: 1.2rem;
  font-size: 2rem;
  color: #fff;
  background: transparent;
  border: 1px solid #27DEBF;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9c4d9a;
  }

  ::placeholder {
    color: #aaa;
    font-size: 1.7rem;
  }
`;

// TextArea Field
export const TextArea = styled.textarea`
  padding: 1.2rem;
  font-size: 1.7rem;
  color: #fff;
  background: transparent;
  border: 1px solid #27DEBF;
  border-radius: 8px;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #9c4d9a;
  }

  ::placeholder {
    color: #aaa;
    font-size: 1.7rem;
  }
`;

// Button
export const Button = styled.button`
  background: linear-gradient(135deg, #27DEBF 0%, #9c4d9a 100%);
  color: white;
  font-size: 2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.4s ease; /* Smooth transition */

  /* Hover effects */
  &:hover {
    background: linear-gradient(135deg, #9c4d9a 0%, #27DEBF 100%);
    transform: scale(1.05); /* Slight scaling on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);

    /* Glowing animation */
    &::before {
      content: '';
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      bottom: -5px;
      background: linear-gradient(45deg, rgba(156, 77, 154, 0.5), rgba(39, 222, 191, 0.5));
      filter: blur(8px);
      z-index: -1; /* Glow behind the button */
      border-radius: 12px;
      opacity: 0;
      animation: glow 0.8s ease forwards;
    }
  }

  /* Glowing keyframe animation */
  @keyframes glow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Error Message Styling
export const ErrorMessage = styled.p`
  color: #ff4444;
  font-size: 0.9rem;
`;
