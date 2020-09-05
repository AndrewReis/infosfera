import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1120px;
    width: 90%;
    height: 90%;



    header{
        width: 100%;
        max-width: 1120px;
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
    max-width: 1120px;
    background: var(--bg-body);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(min-width: 700px){
        flex-direction: row;
        flex-wrap: wrap;
    }

    > div{
        background: var(--bg-content);
        width: 300px;
        height: 100%;
        border: 1px solid var(--bg-body);
        border-radius: 2rem 2rem 0 0;
        transition: 0.2s;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 10px;

        &:hover{
            transform: translateY(-7px);
            border-color: var(--bg-body);
        }

        @media(min-width: 700px){
            margin: 15px;
        }

        > div{
            border-radius: 2rem 2rem 0 0;
            width: 100%;
            height: 47px;
            background: var(--bg-header);
            text-align: center;
            overflow: hidden;

            h1{
                padding: 1rem;
                color: #f1f1f1;
                font-size: 1.9rem;
                flex: 1;
            }

            span{
                font-size: 1.5rem;
                padding: 1rem;
                color: #f1f1f1;
            }
        }

        img{
            width: 100%;
            flex: 1;
            max-height:250px;
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
            align-items: center;

            label{
                color: #f1f1f1;
                font-size: 1.5rem;
                padding: 1.2rem;
            }
        }
    }
   

`;