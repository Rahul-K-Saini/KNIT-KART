// Components.js
import styled from 'styled-components';

export const Container = styled.div`
    background-color: #7215f4;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 800px;
    min-height: 550px;
    margin: 0 auto;
`;

export const SignUpContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    opacity: ${props => (props.signinIn ? '0' : '1')};
    z-index: ${props => (props.signinIn ? '1' : '5')};
    transform: ${props => (props.signinIn ? 'translateX(100%)' : null)};
`;

export const SignInContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
    left: 0;
    width: 50%;
    z-index: 2;
    transform: ${props => (props.signinIn ? 'translateX(100%)' : null)};
`;

export const Form = styled.form`
    background-color: #f7f1fe;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
`;

export const Title = styled.h1`
    font-weight: bold;
    margin: 0;
`;

export const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
`;

export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #7215f4;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active {
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
`;

export const GhostButton = styled(Button)`
    border-color: #ffffff;
`;

export const Anchor = styled.a`
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
`;

export const OverlayContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    transform: ${props => (props.signinIn ? 'translateX(-100%)' : null)};
`;

export const Overlay = styled.div`
    background: #f7b355;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    transform: ${props => (props.signinIn ? 'translateX(50%)' : null)};
`;

export const OverlayPanel = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
    transform: translateX(-20%);
    transform: ${props => (props.signinIn ? 'translateX(0)' : null)};
`;

export const RightOverlayPanel = styled(OverlayPanel)`
    right: 0;
    transform: translateX(0);
    transform: ${props => (props.signinIn ? 'translateX(20%)' : null)};
`;

export const Paragraph = styled.p`
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
`;
