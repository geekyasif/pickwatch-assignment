<template>
  <Navbar expand="lg" theme="dark" background-color="dark">
    <Container class="container">
      <NavbarBrand to="/">PickWatch</NavbarBrand>
      <NavbarToggler />
      <NavbarCollapse>
        <NavbarNavList margin="e-auto b-2 b-lg-0">
          <NavItem>
            <NavLink to="/"> Home </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/items"> Items </NavLink>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
    </Container>
  </Navbar>
</template>
