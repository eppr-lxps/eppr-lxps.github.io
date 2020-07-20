# Clase 101

## Video en Youtube

<a href="http://www.youtube.com/watch?feature=player_embedded&v=EvnaJuV8uw8
" target="_blank"><img src="http://img.youtube.com/vi/EvnaJuV8uw8/0.jpg" 
alt="EPPR CLASE 101 INTRO A LINUX" width="80%" height="auto" border="10" /></a>

<a href="http://www.youtube.com/watch?feature=player_embedded&v=EvnaJuV8uw8
" target="_blank"> Ver en YouTube</a>


## INTRO A LINUX

En esta clase aprenderemos a trabajar con los siguientes comandos:

```markdown
1. man  | Interfaz para leer el manual de otros comandos.
2. sudo | comando para otorgar acceso de super usuario a otros usuarios.
3. ssh  | Conexión segura a otro Shell remoto.
4. shutdown | Comando para agendar apagar nuestra computadora.
5. reboot   | Comando para reiniciar nuestra computadora.
6. poweroff | Comando para apagar nuestra computadora rápidamente.
```

### man

El comando man nos ayuda a acceder rápidamente a el manual de cualquier comando.

Para utilizar este comando es necesario escribir ```man``` antes de cualquier otro comando.

Iniciemos probando leer el manual del mismo comando ```man```

Escribe lo siguiente en la terminal de tu Raspberry Pi

```
man man
```

Ahora se mostrará el manual para el comando ```man```

Prueba leer los manuales para otros comandos:

```
man sudo
```
```
man ssh
```
```
man whoami
```
```
man date
```

### sudo

El comando sudo nos permite realizar una acción con permisos de Super-Usuario (root).

Para utilizar este comando es necesario escribir ```sudo``` antes de cualquier otro comando.

Probemos este comando con el siguiente ejemplo:

Escribe el siguiente comando en tu terminal:

````
whoami
````

Este comando va a imprimir en pantalla la palabra ```pi``` debido a que el usuario con el que iniciamos sesión en esta computadora es PI.

Ahora, escribe el siguiente comando:

````
sudo whoami
````

Ahora, este comando va a imprimir en pantalla la palabra ```root``` debido a que el comando ```sudo``` eleva los permisos de este comando con el usuario ROOT.

Escribe lo siguiente en tu terminal:

````
sudo su
````

Ahora tu terminal ha cambiado y todos los comandos que ejecutes a continuación serán realizados mediante el usuaro ROOT.

Para volver al usuario anterior (pi), escribe lo siguiente en tu terminal:

````
exit
````

Ahora volviste al usuario pi.

Utiliza el comando ```sudo su``` con mucho cuidado.

### ssh

El comando ssh nos ayuda a conectarnos a una computadora remota mediante Shell.

Para utilizar este comando es necesario especificar un usuario y una dirección ```usuario@dirección```

Iniciemos probando conectarnos con nuestra misma computadora mediante la dirección  ```127.0.0.1```

Escribe lo siguiente en la terminal de tu Raspberry Pi

```
ssh pi@127.0.0.1
```

La primera vez que corras este comando, aparecerá un mensaje y tendrás que escribir ```yes``` para aceptar la comunicación con la computadora.

Después, se te solicitará ingresar la contraseña de la computadora.

En linux, las contraseñas se ingresan de manera invisible, es decir que no verás ningun cambio en la pantalla mientras escribes la contraseña.

Una vez que escribas la contraseña presiona ENTER para continuar.

Una vez iniciada la sesión mediante SSH podemos cerrarla escribiendo:

```
exit
```

para cerrar la sesión remota.

### shutdown

El comando shutdown nos ayuda a agendar el apagado correcto de nuestra computadora.

Toma en cuenta que al correr estos comandos tu computadora (Raspberry pi) va a apagarse o reiniciarse.

Si esto sucede, vuelve a iniciar sesión mediante Visual Studio Code.

Puedes apagar tu computadora con las siguientes opciones:
(siempre inicia este comando con ```sudo```)

```
sudo shutdown
```

El comando anterior agenda que la computadora se apague en 1 minuto (default).

```
sudo shutdown -h now
```

El comando anterior solicita que todos los procesos se paren y la palabra ```now``` obliga a nuestra computadora a ejecutar el apagado en este momento.

```
sudo shutdown 13:45
```

Este comando agenda que la computadora se apague a las 13:45 en horario local.

### reboot

El comando reboot nos ayuda a reiniciar nuestra computadora de manera segura y automática.

Para reiniciar tu computadora utiliza el siguiente comando:

```
sudo reboot
```

### poweroff

El comando poweroff es un alias de shutdown, y nos ayuda a solicitar apagar la computadora de manera rápida.

Para apagar tu computadora rápidamente, utiliza el siguiente comando:

```
sudo poweroff
```

### Soporte o Contacto

Visita nuestro grupo en [Google Chat](https://chat.google.com/) o contáctanos mediante [Instagram](https://instagram.com/recurs1v0)
