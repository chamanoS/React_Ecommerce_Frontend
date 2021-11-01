import { Facebook, LinkedIn, MailOutline, Phone, Room, Twitter, YouTube } from '@mui/icons-material'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin:20px 0;
`
const SocialContainer = styled.div`
    display:flex;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
`
const Center = styled.div`
    flex:1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom:30px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`
const Right = styled.div`
    flex:1;
    padding:20px;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-item:center;
`
const Payment = styled.img`
   width:50%;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Shabah.</Logo>
                <Desc>Google Fonts is a library of 1,291 free licensed font families and APIs for convenient use via CSS and Android. The library also has delightful and beautifully crafted icons for common actions and items.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="3B5999">
                        <LinkedIn/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <YouTube/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 2319 Gumede street , Rockville 1818
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +27 65 234 5678
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@Shabah.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>
    )
}

export default Footer
