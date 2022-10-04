import styled from "styled-components";



export const SectionElement = styled.section`

h1{
    margin: 45px 0 30px 0;
}
`;


export const DespreNoiDiv = styled.div`

display: flex;
flex-direction: column;
gap: 20px 0;

.nr_project_desc{
    display: flex;
    gap: 20px 0;
    flex-direction: column;

    .nr_project{
        width: 100px;
        height: 60px;
        background-color: #FFD600;
        display: flex;
        align-items: center;
        justify-content: center;

        p{
            font-size: 30px;
            font-weight: bold;
            margin-left: 40px;
        }

    }
}


.img_prj{
    display: flex;
    gap: 20px 0;
    flex-direction: column;
}


`

