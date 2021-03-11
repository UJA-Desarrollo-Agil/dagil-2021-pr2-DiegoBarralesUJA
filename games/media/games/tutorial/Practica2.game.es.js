// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>EN BUSCA DE LOS INGREDIENTES</h1>\
        <img src='imagenes/tarta.jpg' width='500' height='320'>\
        <p>Tu madre te ha mandado a comprar ingredientes para hacer\
        una tarta de zanahoria para el cumpleaños sorpresa de tu hermano.\
        </p>\
        \
        <p>Necesitas traer los ingredientes antes de las 14:00, porque es sábado\
        y todas las tiendas están cerradas por la tarde.</p>\
        <p>A pesar de ser fin de semana, tú has madrugado para estudiar Desarrollo Ágil\
        y te encuentras muy cansado, por lo que tienes que decidir entre <a href='dormir'>dormir diez minutitos</a> o <a href='ir'>ir ya al supermercado</a>.</p>"
    ),



    "ir": new undum.SimpleSituation(
        "<p><img src='imagenes/mapache.jpg' width='500' height='260'></p>\
        <p>Has preferido ir al dichoso supermercado a pesar de que\
        pareces un mapache con unas ojeras que te llegan al suelo.</p>\
        <p>Tienes prisa por acabar el recado, así que puedes <a href='salir'>salir sin mirar si lo llevas todo</a>\
        o <a href='revisar'>revisar que no olvidas nada</a>.</p>",
        {
            heading: "Ir al supermercado",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "dormir": new undum.SimpleSituation(
        "<p><img src='imagenes/dormir.jpg' width='500' height='320'></p>\
        <p>Al final has perdido la batalla entre ser responsable y \
        caer rendido en la cama.\
        Mientras duermes tienes una pesadilla en la que tu madre te \
        regaña como hacía tiempo que no lo hacía.</p>\
        <p>Ah no, no es un sueño, es lo que ocurre cuando despiertas porque \
        es demasiado tarde para ir al supermercado y por tu culpa tu hermano \
        no tendrá su tarta de cumpleaños y te odiará para siempre.</p>\
        <p>FIN</p>",
        {
            heading: "Dormir",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "salir": new undum.SimpleSituation(
        "<p><img src='imagenes/sinmascarilla.jpg' width='500' height='320'>\
        Te das cuenta de que no habías cogido la mascarilla.\
        </p>\
        <p>Ahora debes darte media vuelta y <a href='volver'>volver a casa a por ella</a>.</p>",
        {
            heading: "salir",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "volver": new undum.SimpleSituation(
        "<p>Tras saber que no olvidas nada más, lo único que te queda es llegar al supermercado.\
        </p>\
        <p>El camino es largo, y no sabes si <a href='bus'>coger el bus</a> o <a href='andar'>ir andando</a> para quitarte el sueño que tenías.</p>",
        {
            heading: "volver a por la mascarilla",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "revisar": new undum.SimpleSituation(
        "<p><img src='imagenes/mascarilla.jpg' width='500' height='320'></p>\
        <p>Te das cuenta de que no habías cogido la mascarilla.\
        </p>\
        <p>Ahora lo único que te queda es llegar al supermercado.\
        El camino es largo, y no sabes si <a href='bus'>coger el bus</a> o <a href='andar'>ir andando</a> para quitarte el sueño que tenías.</p>",
        {
            heading: "Revisar que lo llevas todo",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "bus": new undum.SimpleSituation(
        "<p><img src='imagenes/bus.jpg' width='500' height='320'>\
        Tienes tan mala suerte de que ese día el autobús tenía algún fallo (o el conductor estaba ebrio) \
        y tiene un accidente por el cual acabas en el hospital.</p>\
        <p>A pesar de que no ha sido culpa tuya, tu hermano te odiará por no comprar los ingredientes para su tarta de cumpleaños.</p>\
        <p>FIN</p>",
        {
            heading: "ir en bus",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "andar": new undum.SimpleSituation(
        "<p>Hace buen día y el sol consigue espabilarte un poco, así que ha sido buena idea. </p>\
        <p>Ahora piensas si merece la pena <a href='atajo'>tomar un atajo que conoces</a> o <a href='habitual'>ir por el camino habitual</a>, que es más largo. </p>",
        {
            heading: "ir andando",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "atajo": new undum.SimpleSituation(
        "<p><p><img src='imagenes/obras.jpg' width='500' height='320'>\
        Vaya, por el atajo que tomas hay calle que está en obras y debes <a href='habitual'>volver al camino habitual</a>.</p>",
        {
            heading: "tomar el atajo",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "habitual": new undum.SimpleSituation(
        "<p><img src='imagenes/supermercado.jpg' width='500' height='320'></p>\
        <p>Por fin llegas, aunque tardas un poco más que por el atajo.</p>\
        <p>Lo que queda es fácil, sólo tienes que comprar los ingredientes que te dijo tu madre, pero...\
        no recuerdas exactamente cuáles eran, entonces debes elegir entre jugártela o <a href='memoria'>usar tu memoria para recordarlos</a>\
        o <a href='whatsapp'>pedirle a tu madre por WhatsApp la lista de ingredientes</a>. </p>",
        {
            heading: "tomar el camino habitual",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "memoria": new undum.SimpleSituation(
        "<p>Aunque sabes que usar la memoria no es tu fuerte decides jugártela.</p>\
        <p>Crees haberlo comprado todo, así que <a href='terminar1'>vuelves a casa</a> contento por haber hecho el recado casi sin problemas. </p>",
        {
            heading: "usar tu memoria",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "whatsapp": new undum.SimpleSituation(
        "<p>Sabes que la memoria no es tu fuerte.</p>\
        <p>Así que aunque estés demostrándole a tu madre que eres un desastre, le pides la lista de ingredientes\
        y  finalmente consigues comprarlo todo. </p>\
        <p>Es hora de <a href='terminar2'>volver a casa</a> contento por haber hecho el recado sin problemas. </p>",
        {
            heading: "mandar un whatsapp a tu madre",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "terminar1": new undum.SimpleSituation(
        "<h2>¡NO HAS COMPRADO AZÚCAR!</h2>\
        <p><p><img src='imagenes/olvida.jpg' width='500' height='320'>\
        La has cagado pero bien, no te da tiempo a volver al supermercado y por tu culpa tu hermano no tendrá un dulce cumpleaños,\
        ahora te odiará para siempre. </p>\
        <p>FIN</p>",
        {
            heading: "vuelves a casa",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "terminar2": new undum.SimpleSituation(
        "<h2>¡CONSEGUIDO!</h2>\
        <p><p><img src='imagenes/finalfeliz.jpg' width='500' height='260'>\
        <p>Tanto tu madre como tu hermano están contentos porque has traido lo necesario para hacer la tarta, aunque te hayas\
        aguantado las ganas de dormir y no hayas descansado tras haberte estudiado el tema de SCRUM durante toda la mañana.</p>\
        <p>FIN</p>",
        {
            heading: "vuelves a casa",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),


};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    skill: new undum.IntegerQuality(
        "Skill", {priority:"0001", group:'stats'}
    ),
    stamina: new undum.NumericQuality(
        "Stamina", {priority:"0002", group:'stats'}
    ),
    luck: new undum.FudgeAdjectivesQuality( // Fudge as in the FUDGE RPG
        "<span title='Skill, Stamina and Luck are reverently borrowed from the Fighting Fantasy series of gamebooks. The words representing Luck are from the FUDGE RPG. This tooltip is illustrating that you can use any HTML in the label for a quality (in this case a span containing a title attribute).'>Luck</span>",
        {priority:"0003", group:'stats'}
    ),

    inspiration: new undum.NonZeroIntegerQuality(
        "Inspiration", {priority:"0001", group:'progress'}
    ),
    novice: new undum.OnOffQuality(
        "Novice", {priority:"0002", group:'progress', onDisplay:"&#10003;"}
    ),

    mascarilla: new undum.OnOffQuality("Mascarilla",{
        priority:"0001",
        group:'Cosas',
        onDisplay:"&#10003;"})

};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    stats: new undum.QualityGroup(null, {priority:"0001"}),
    progress: new undum.QualityGroup('Progress', {priority:"0002"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    character.qualities.skill = 12;
    character.qualities.stamina = 12;
    character.qualities.luck = 0;
    character.qualities.novice = 1;
    character.qualities.inspiration = 0;
    system.setCharacterText("<p>¿Has cumplido el objetivo?.</p>");
};
