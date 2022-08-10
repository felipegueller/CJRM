const password = 'newPassword'

if (password.length >= 12)
  console.log('Sua senha está forte! :-)')
else if (password.length >= 8)
  console.log('Sua senha tem mais de 8 caracteres!')
else 
  console.log('Sua senha é fraca!')

  