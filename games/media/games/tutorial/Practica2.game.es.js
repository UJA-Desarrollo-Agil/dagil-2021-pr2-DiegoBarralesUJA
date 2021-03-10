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
        y todas las tiendas están cerradas por la tarde.\
        A pesar de ser fin de semana, tú has madrugado para estudiar Desarrollo Ágil\
        y cuando te han pedido que salgas a comprar te encuentras muy cansado.\
        Por lo que tienes que decidir entre <a href='dormir'>dormir diez minutitos</a> o <a href='ir'>ir ya al supermercado</a>. \
        </p>"
    ),



    "ir": new undum.SimpleSituation(
        "<p>Has preferido ir al dichoso supermercado a pesar de que\
        pareces un mapache con unas ojeras que te llegan al suelo.</p>\
        <p>Tienes prisa por acabar el recado que puedes <a href='salir'>salir sin mirar si lo llevas todo</a>\
        o <a href='revisar'>revisar que no olvidas nada</a>.</p>",
        {
            heading: "Ir al supermercado",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "dormir": new undum.SimpleSituation(
        "<p>Al final has perdido la batalla entre ser responsable y \
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
        "<p>Te das cuenta de que no habías cogido la mascarilla.\
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
        <p>El camino es largo, y no sabes si coger el bus o ir andando para quitarte el sueño que tenías.</p>",
        {
            heading: "volver a por la mascarilla",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "revisar": new undum.SimpleSituation(
        "<p>Te das cuenta de que no habías cogido la mascarilla.\
        </p>\
        <p>ahora lo único que te queda es llegar al supermercado.\
        El camino es largo, y no sabes si coger el bus o ir andando para quitarte el sueño que tenías.</p>",
        {
            heading: "Revisar que lo llevas todo",
            displayOrder: 1,
            tags: ["topic"]
        }
    ),

    "bus": new undum.SimpleSituation(
        "<p>Tienes tan mala suerte de que ese día el autobús tenía algún fallo (o el conductor estaba ebrio).\
        y tiene un accidente por el cual acabas en el hospital.</p>\
        <p>A pesar de que no ha sido culpa tuya, tu hermano te odiará por no tener una tarta porque no compraste los ingredientes. </p>",
        {
            heading: "bus",
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
