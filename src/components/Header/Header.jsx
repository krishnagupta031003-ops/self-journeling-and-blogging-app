import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Logo,LogoutBtn } from '../index'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {
  const authSatus = useSelector((state)=>{state.auth.status})
  const navigate  = useNavigate();
  const navItems = [
    {
      name: 'home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authSatus
    },
    {
      name: 'Sign Up',
      slug: '/register',
      active: !authSatus
    },

    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authSatus
    },

    {
      name:"Add Post",
      slug:'/add-post',
      active:authSatus
    }
  ]
  return (
    <header className='py-3 shadow ng-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-r'>
          <Link to='/'>
          <Logo widht='70px'/>
            </Link>
          </div>

          <ul className='flex ml-auto'>
            {navItems.map((item)=>item.active ?(
              <li key={item.name}>
                <button onClick={()=>navigate(item.slug)} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>{item.name}</button>
              </li>
            ):null)}
            {authSatus && (
              <li>
                <LogoutBtn/>
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header