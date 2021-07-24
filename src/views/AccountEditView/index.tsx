import React from 'react';
import NavBar from '../../components/NavBar'
import AccountEditForm from '../../components/AccountEditForm'
import Footer from '../../components/Footer'

import { Container } from './styles';

const AccountEditView: React.FC = () => {
  return (
      <Container>
          <main>
            <AccountEditForm />
          </main>
          <NavBar />
          <Footer />
      </Container>
  );
}

export default AccountEditView;