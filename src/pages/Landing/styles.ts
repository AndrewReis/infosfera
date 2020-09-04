import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    height: 90%;


    header{
        width: 100%;
        max-width: 1200px;
        background: var(--bg-header);
        padding: 3rem;

        form{
            display: flex;
            align-items: center;

            input{
                border: 0;
                background: var(-bg-input);
                border-radius: 1rem 0 0 1rem;
                padding: 1rem;
                color: #000;
                margin-right: 3px;

                &:hover{
                    background: #f2f2f2;
                }
            }

            button{
                background: var(--bg-button);
                border: 0;
                border-radius: 0 1rem 1rem 0;
                cursor: pointer;
                padding: 1.1rem;
                color: #fff;

            }
        }
    }

`;

export const Main = styled.main`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    background: var(--bg-body);

    display: grid;
    grid-template-columns: repeat(4, 255px);
    grid-gap: 20px;

    justify-content: center;

    padding-bottom: 3rem;


    > div{
        margin-top: 30px; 
        background: var(--bg-content);
        width: 100%;
        height: 100%;
        border: 1px solid var(--bg-body);
        border-radius: 2rem 2rem 0 0;
        transition: 0.2s;

        display: flex;

        flex-direction: column;
        justify-content: space-between;

        &:hover{
            transform: translateY(-7px);
            border-color: var(--bg-body);
        }

        > div{
            border-radius: 2rem 2rem 0 0;
            width: 100%;
            background: var(--bg-header);
            text-align: center;

            h1{
                padding: 1rem 0 0 0;
                color: #f1f1f1;
                font-size: 1.9rem;
                flex: 1;
                overflow: hidden;
            }

            span{
                font-size: 1.5rem;
                padding: 1rem;
                color: #f1f1f1;
                width: 80px;
            }
        }

        img{
            width: 100%;
            flex: 1;
            max-height:250px;
            background-size: cover;
        }

        p{
           color: #a1a1a1;
           font-weight: 300;
           font-size: 1.3rem;
           line-height: 1.9rem;
           padding: 1.2rem;

           overflow: hidden;
        }

        div{
            display: flex;
            justify-content: space-around;

            label{
                color: #f1f1f1;
                font-size: 1.5rem;
                padding: 1.2rem;
            }
        }
    }
   

`;