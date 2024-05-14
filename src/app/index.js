import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Aviso from './componests/aviso';
import NetInfo from '@react-native-community/netinfo';

export default function App() {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);

    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {isConnected === null ? (
        <Aviso texto="Verificando conexão ... " isConnected={isConnected}/>
      ) : isConnected ? (
      <Aviso texto="Conectado à internet" isConnected={isConnected} />
      ) : (
      <Aviso texto="Desconectado da internet" isConnected={isConnected} />
)}
    </View>
  );
}