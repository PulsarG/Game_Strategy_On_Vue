<template>
    <div class="allmenu">
        <div class="menu">
            <p style="margin-bottom: 3px;"><strong>{{ menuText }}</strong><br>ver 0.9.3 Beta-test</p>
            <div class="menubtns">
                <button class="mbtn" @click="openNews">News</button>
                <button class="mbtn" @click="setLearn">{{ learnText }}</button>
                <button class="mbtn" @click="setLor">{{ lorText }}</button>
                <button class="mbtn" @click="goLadderFuncs">{{ ladderText }}</button>
            </div>
        </div>

        <div class="menublock" style="overflow: auto;">

            <div style="display: flex; flex-direction: column-reverse; overflow: auto; margin-top: 5px;"
                v-show="isNews">
                <div style="border-bottom: 5px double black;" class="newsesblock" v-for="newses in news"
                    :key="newses.id">
                    <div style="border-top: 3px;">
                        <h3 style="border-top: 3px;"><strong>{{ newses.title }}</strong></h3>
                        <p><i>{{ newses.date }}</i></p>
                        <p>{{ newses.body }}</p>
                    </div>
                </div>
            </div>

            <div class="learn" v-show="!isHideLearn" style="width: auto">

                <div class="acc" style="display: flex; flex-direction: column; width: auto; margin-top: 20px;">

                    <div class="acc-item" style="display: flex; flex-direction: column;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Майнинг /
                                    Заработок</strong></button></div>
                        <div class="acc-item__content" style="width: auto;">
                            <p class="leartextmenu"> Кликните на Систему Майнинга <img class="learnimg"
                                    src="@/assets/29719-processor-integralnye_mikroshemy-mnogoyadernyj_processor-sinij_cvet-liniya-x750.jpg"
                                    alt=""> чтобы купить Модули Майнинга <img class="learnimg" src="@/assets/cheap.png"
                                    alt=""> <br><br> Каждый Модуль приносит +1 Кредит в секунду. <br><br> Кредиты так же
                                можно
                                получить в Награде <img class="learnimg" src="@/assets/cosmochest.jpg" alt=""> после
                                смерти врага.
                            </p>
                        </div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Окно персонажа / Меню
                                    навыков</strong></button></div>
                        <div class="acc-item__content">
                            <p class="leartextmenu"> Кликните на Персонажа, чтобы открыть меню Навыков и Инвентарь.
                                <br><br>
                                Имея Очки Навыков можно: <br><br> улучшить систему прицеливания, что поспособствует
                                более
                                частым попаданиям в слабые зоны врага и будет наносить Критический урон; <br><br>
                                улучшить систему "авто-выстрела по слабым местам", что даст шанс нанести смертельный
                                урон одним выстрелом; <br><br>
                                придать уверенности в собственных силах вашему Инженеру, что благоприятно скажется на
                                его личных навыках, благодаря которым он сможет улучшить Турель. <br>
                                <br> В этом же окне можно использовать Щит (просто купив новую батарею), купить и
                                использовать Пси-бомбы, которые
                                моментально уничтожат ближайшего врага и сбросят Характеристики следующего противника до
                                минимальных (см. ЛОР) <br>
                                А так же отображаются иные имеющиеся у персонажа предметы.
                            </p>
                        </div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Инженер / Навыки
                                    инженера</strong></button></div>
                        <div class="acc-item__content">
                            <p class="leartextmenu">Кликните на Меню Инженера, чтобы открыть окно взаимодейтсвия с ним.
                                <br><br>
                                Здесь можно нанять инженера (не противоречит правилам соревнования. см. ЛОР), который за
                                хорошую плату готов рискнуть жизнью и постоять вместе с вами. Правда за вашей спиной.
                                <br><br>
                                Благодаря его навыкам можно улучшить модуль концентрирования заряда, что поднимет урон
                                каждого выстрела. <br><br>
                                Он так же сможет заменять и добавлять съемную кевларовую броню. <br><br>
                                Ну и конечно, отвалив ему немало Кредитов, он установит Турель, которая мало того, что
                                наносит
                                урон, так еще и отвлекает внимание противника на себя, пока не будет уничтожена.
                            </p>
                        </div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">База Снабжения / Окно
                                    доставки</strong></button></div>
                        <div class="acc-item__content">
                            <p class="leartextmenu">Кликните на Меню Базы Снабжения, чтобы открыть окно Быстрой
                                Доставки. <br><br>
                                Здесь, первым делом, следует сообщить на Корабль-Базу, что вы просите создать трек
                                моментальной доставки, т.к. вступили в соревнование. <br><br>
                                Это позволит заказывать препараты экстренного заживления организма, которые стоят
                                немало, и если вы "вредите здоровью по своей прихоти", то покупайте данные препараты за
                                свой счет.
                                <br>Они восстановят ваше здоровье на определенное колличество. <br><br>
                                Вы можете заказать новые Модули Накопления Заряда для вашей винтовки, котрые позволят
                                стрелять быстрее. <br><br>
                                А так же есть возможность купить более продолжительные по времени Щиты.
                            </p>
                        </div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Ход
                                    боя</strong></button></div>
                        <div class="acc-item__content">
                            <p class="leartextmenu">
                                Переодически Персонаж наносит урон врагу, а Враг по Персонажу, или Щиту, или Турели.
                                <br><br>
                                Со временем урон Противника возрастает. А каждый следующий Противник имеет больше
                                здоровья,
                                чем предыдущий. <br><br>
                                Броня Персонажа способна уменьшать входящий урон. А если Брони больше, чем урон Врага,
                                то
                                она полностью поглощает входящий урон, при этом теряя в прочности. <br><br>
                                Каждый враг приносит определенное количество Очков Опыта (зависит от уровня Противника),
                                благодаря которому повышается уровень персонажа. Каждый новый уровень дает +1 Очко
                                Навыка (см. Окно
                                Персонажа). <br><br>
                                Главное: каждый убитый противник повышает ваш общий Счет для ладдера. Количество
                                зачисляемых
                                очков в Счет зависит от Уровня Врага и Продолжительности боя. <br><br>
                                Когда Здоровье персонажа падает до 0, он впадает в кому, а его товарищи используют
                                Пси-бомбу, чтобы уничтожить угрозу. <br><br>
                                В конце Вам будет предоставлен полный отчет о ходе боя. Вам будет предложено отправить
                                ваш результат в таблицу Ладдера.
                            </p>
                        </div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Добыча</strong></button>
                        </div>
                        <div class="acc-item__content">
                            <p class="leartextmenu">
                                Время от времени, после победы над очередным противником, "в его карманах" можно
                                обнаружить различную добычу. <br><br>
                                Зачастую это просто некое количество Кредитов. <br><br>
                                Иногда Очко Навыка. <br><br>
                                Реже Пси-бомбу. <br><br>
                                В самых редких случаях можно обнаружить Уникальные Технологии, которые Персонаж
                                незамедлительно приспособит для себя. <br>
                                Или иные предметы.
                                <br><br>
                                <strong>Кликните на Ящик с добычей (если не стоит Автоигра), чтобы подтвердить получение
                                    награды и продолжить.</strong>
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            <div class="lor" v-show="!isHideLor">
                <p v-show="!isEng">
                    Далекий космос. Вы - наемник из элитной группы "Evans". В данный момент вы состоите в отряде,
                    который охраняет шахтерское предприятие на планете Тангейзер-1701.
                    <br>
                    <br>
                    Планета богата минералами. Это привлекает многих пиратов. Но главный ваш враг - Барги.
                    <br>
                    <br>
                    Барги - это одни из самых опасных противников в галактике. Но не для вашей элитной группы.
                    Барги объеденены коллективным разумом и уникальными технологиями, что позволяет им противостоять
                    любой угрозе. Если умирает один Барг, то остальные участся противостоять тому, что убило их боевую
                    единицу, и последующие уже имеют повышенную сопротивляемость.
                    <br>
                    <br>
                    Убивая одного Барга вы учите следующего противостоять тому урону, что был нанесет предыдущему.
                    Поэтому для убийства каждого последующего Барга требуется больше усилий.
                    А Барги, мало того, что становятся более стойкими, но и наращивают свой урон, если противник
                    способен противостоять ему. Поэтому Барги все сильнее и сильнее.
                    <br>
                    <br>
                    Противостоять Баргам в затяжной битве - верный проигрыш.
                    <br>
                    <br>
                    Но наемников из отряда "Evans" это только раззадоривает. Постоянно совершенствующийся противник -
                    отличная причина устроить состязание.
                    Во время своей смены многие наемники группы "Evans" выходят в открытую к врагу и ведут счет
                    скошенных голов противника.
                    <br>
                    <br>
                    Конечно, такой запал наемников не редко выходит за рамки стоймости стандартной смены. Поэтому
                    руководство группы объявило: сам ищешь себе пробем - сам оплачиваешь свое веселье.
                    <br>
                    <br>
                    Поэтому наемники, что вышли в соревновательный бой, за свой счет оплачивают повышенный расход
                    ресурсов. В свою очереть отряд снабжения незамедлительно доставляет все с Корабля-Базы.
                    <br>
                    <br>
                    Если наемник терпит поражение, то его товарищи незамедлительно взрывают псионическую бомбу, которая
                    на время прерывает связь Баргов и не позволяет совершенствоваться дальше.
                    Псионические бомбы - не панацея от Баргов, но в локальным стычках позволяют выиграть сражение.
                    <br>
                    <br>
                    Личная криптовалютная система позволяет зарабатывать Кредиты и наращивать заработок за счет
                    установки новых
                    модулей.
                    <br>
                    <br>
                    Вы - новичок в элитной группе "Evans", который только что заступил на пост и решил включится в
                    соревнование со своими товарищами.
                    <br>
                    <br>
                    Удачи!
                </p>
                <p v-show="isEng">
                    LOR has not yet been translated into English.
                </p>
            </div>

            <div class="ladder" id="laddertab" v-show="!isLadder">
                <table v-if="!isLoad">
                    <th style="width: 100px">
                        NICK
                    </th>
                    <th @click="sortByScore">
                        <button style="width: 60px">Score</button>
                    </th>
                    <th @click="sortByLevel">
                        <button style="width: 60px">Level</button>
                    </th>
                    <th @click="sortByKills">
                        <button style="width: 60px">Kills</button>
                    </th>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.nick }}</td>
                        <td>{{ user.score }}</td>
                        <td>{{ user.level }}</td>
                        <td>{{ user.kills }}</td>
                    </tr>
                </table>
                <div v-else>
                    <p>Load...</p>
                </div>
            </div>

            <div class="about" style="display: flex; flex-direction:column;" v-show="!isAbout">
                <form class="report" @submit.prevent>
                    <h4>Обратная звязь</h4>

                    <textarea style="max-width: 300px; min-width: 100px; max-height: 500px; min-height: 100px;"
                        class="reporttext" cols="30" rows="10" v-model="this.inreportText"></textarea>
                    <!-- <input style="width: 220px" class="reportemail" type="email"
                        placeholder="Email (necessarily / обязательно)"> -->
                    <button id="repbtn" type="submit" @click="sendMsg">Send</button>

                </form>

                <h4 style="margin-top: 50px;"><a href="https://github.com/PulsarG">github.com/PulsarG</a> / 2022</h4>
            </div>
        </div>

        <div class="botbtn">

            <div class="btn" style="margin-bottom: 3px;">
                <button class="btnstart" v-bind:class="{ deletestart: isStart }" @click="toStartGame">{{ startBtn
                }}</button>
                <div class="btnstop" id="btnstop">
                    <button class="rpbtns" @click="useAutogame"
                        v-bind:class="{ btnautog: isAutogame }">Autogame</button>
                    <button class="rpbtns" @click="setPause" v-bind:class="{ btnautog: isPause }">{{ pauseText
                    }}</button>
                    <form action=""><button class="rpbtns">{{ stopBtnText }}</button></form>
                </div>
            </div>


            <div class="langbtn">
                <button class="btnl" @click="setLang">{{ lang }}</button>
                <!-- <button class="btnl" @click="$router.push('/q')">{{ aboutText }}</button> -->
                <button class="btnl" @click="openAbout">{{ aboutText }}</button>
            </div>
        </div>

    </div>
</template>

<script>
import axios from "axios";

export default {

    name: 'menu-block',
    props: {
        isEng: {
            type: Boolean
        },
        isPause: Boolean,
    },
    data() {
        return {
            msg: "",
            iD: 1,

            startBtn: "Start game",
            lang: "RUS",
            menuText: "Evans. Autho-shoot game",
            aboutText: "About",
            inreportText: "Bug report or other message. Anonim or add you'r Email.",
            urEmailText: "You'r Email (necessarily)",

            ruStart: "Начать игру",
            enStart: "Start game",

            learnText: "Handbook",
            lorText: "LOR",
            ladderText: "Ladder",

            enLang: "ENG",
            ruLang: "RUS",

            isStart: false,

            isHideLearn: true,
            isLadder: true,
            isHideLor: true,
            isAbout: true,
            hideText: "Hide/Show learn",
            isAutogame: false,

            stopBtnText: "Resset",
            pauseText: "Pause",

            report: '',

            users: [],
            news: [],
            countOpenLadder: 0,
            countOpenNews: 0,
            isLoad: false,
            isNews: false,

            dbLadder: "ladder",
            dbNews: "news",
        }
    },

    methods: {
        goLadderFuncs() {
            this.getFromApi();
            this.setLadder();
        },

        loadApiGet(string, outarray) {
            try {
                axios.get("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/" + string + ".json")
                    .then((response) => {
                        let array = [];
                        for (var i in response.data)
                            array.push([i, response.data[i]]);
                        let j = array.length;

                        for (let i = 0; i < j; i++) {
                            outarray.push(array[i][1]);
                        }
                    });
            } catch (e) {
                alert(e);
            } 
        },

        async getFromApi() {
            if (this.countOpenLadder == 0) {
                this.isLoad = true;
                this.loadApiGet(this.dbLadder, this.users);
                this.countOpenLadder++;
            }
            setTimeout(() => { this.sortByScore(); this.isLoad = false; }, 500);
        },

        openNews() {
            if (this.isNews) {
                this.isNews = false;
            } else {
                this.isNews = true;
                this.isLadder = true;
                this.isHideLearn = true;
                this.isHideLor = true;
                this.isAbout = true;
            }

            if (this.countOpenNews == 0) {
                this.loadApiGet(this.dbNews, this.news);
                this.countOpenNews++
            }
        },

        sortByScore() {
            this.users.sort((a, b) => b.score - a.score);
        },
        sortByLevel() {
            this.users.sort((a, b) => b.level - a.level);
        },
        sortByKills() {
            this.users.sort((a, b) => b.kills - a.kills);
        },

        sendMsg() {
            const msg = document.querySelector('.reporttext');
            const emailfrom = document.querySelector('.reportemail');
            this.$loadScript("https://smtpjs.com/v3/smtp.js")
                .then(() => {
                    window.Email && window.Email.send({
                        SecureToken: "7d841a7f-c9ef-4020-8daa-920e7c4a446d",
                        To: 'furylonzero@gmail.com',   // На какую почту отправить
                        From: 'furylonzero@gmail.com',              // должно совпадать с аккаунтом сервиса
                        Subject: "Обратная связь от EvansGame.ru",
                        Body: msg.value
                    }).then(
                        alert("Сообщение отправлено / Message sent")
                    );
                })
                .catch(() => {
                  
                });
        },

        useAutogame() {
            this.$emit('useAutogame');
            if (this.isAutogame) {
                this.isAutogame = false;
            } else {
                this.isAutogame = true;
            }
        },


        toStartGame() {
            this.$emit('toStartGame');
            this.isStart = true;

            setTimeout(() => { document.getElementById('btnstop').style.display = 'block'; }, 2000);
        },
        setLang() {
            this.$emit('setLang');

            if (!this.isEng) {
                this.startBtn = this.enStart;
                this.menuText = "Evans. Autho-shoot game";
                this.lang = this.ruLang;
                this.hideText = "Hide/Show learn";
                this.stopBtnText = "Resset";
                this.pauseText = "Pause";
                this.aboutText = "About";
                this.learnText = "Handbook";
                this.lorText = "LOR";
                this.ladderText = "Ladder";
                this.inreportText = "Bug report or other message. Anonim or add you'r Email.";
            } else {
                this.startBtn = this.ruStart;
                this.menuText = "Evans. Autho-shoot game";
                this.lang = this.enLang;
                this.hideText = "Скрыть/показать подсказки";
                this.stopBtnText = "Заново";
                this.pauseText = "Пауза";
                this.aboutText = "Инфо";
                this.learnText = "Справочник";
                this.lorText = "ЛОР";
                this.ladderText = "Ладдер";
                this.inreportText = "Ваше сообщение или баг-репорт. Анонимно или добавте ваш Email";
            }
        },
        setLearn() {
            document.querySelectorAll('.acc-item__trigger').forEach((item) =>

                item.addEventListener('click', () => {
                    const parent = item.parentNode;

                    parent.classList.toggle('acc-item--active');
                }));

            if (!this.isHideLearn) {
                this.isHideLearn = true;
            } else {
                this.isHideLearn = false;
                this.isHideLor = true;
                this.isLadder = true;
                this.isAbout = true;
                this.isNews = false;
            }
        },
        setLor() {
            if (!this.isHideLor) {
                this.isHideLor = true;
            } else {
                this.isNews = false;
                this.isHideLor = false;
                this.isHideLearn = true;
                this.isLadder = true;
                this.isAbout = true;
            }
        },
        setLadder() {
            if (!this.isLadder) {
                this.isLadder = true;
            } else {
                this.isNews = false;
                this.isLadder = false;
                this.isHideLearn = true;
                this.isHideLor = true;
                this.isAbout = true;
            }
        },
        openAbout() {
            if (!this.isAbout) {
                this.isAbout = true;
            } else {
                this.isNews = false;
                this.isAbout = false;
                this.isLadder = true;
                this.isHideLearn = true;
                this.isHideLor = true;
            }
        },


        setPause() {
            this.$emit('setPause');
        },

        sendReport() {
            const newReport = {
                id: Date.now(),
                report: this.report,
            };
            // this.reports.push(newReport);
            console.log(newReport);
            this.report = '';
        }
    },
}
</script>

<style scoped>
.allmenu {
    width: 400px;
    height: 900px;
    /* border: 5px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative;
    top: 0; */
}

.menu {
    width: 300px;
    height: 100px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menubtns {
    display: flex;
    flex-direction: row;

}

.mbtn {
    height: 20px;
    width: 80px;
    margin: 2px;
}

.learn {
    height: auto;
    width: auto;

}

.menublock {
    height: 890px;
}

.lor {
    height: 600px;
    width: auto;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    opacity: 1;
}

.ladder {
    display: flex;
    justify-self: center;
    align-self: center;
    height: auto;
}

.btnstart {
    height: 100px;
    width: 200px;
    /* border: 1px solid red; */
    display: block;
}

.rpbtns {
    height: 50px;
    width: 200px;
    /* border: 1px solid red; */
    display: block;
}

.btn {
    height: auto;
    width: auto;
    display: flex;
    /* border: 1px solid red; */
}

.btnstop {
    height: auto;
    width: auto;
    /* border: 1px solid red; */
    display: none;
    /*  position: relative;
    bottom: 0; */
    margin-bottom: 10px;
}

.langbtn {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    bottom: 0;
}

.btnl {
    width: 50px;
    height: 30px;
}

p {
    font-size: 20px;
    overflow: auto;
}

.deletestart {
    display: none;
}

.botbtn {
    display: flex;
    justify-self: flex-end;
    flex-direction: column;
    align-items: center;
    height: auto;
}

.about {
    display: flex;
    align-items: center;
    justify-content: center;
}

.report {
    /*  border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

table tr:nth-child(2) {
    counter-reset: rowNumber;
}

table tr {
    counter-increment: rowNumber;
}

table tr td:first-child::before {
    content: counter(rowNumber);
    min-width: 1em;
    margin-right: 0.5em;
}

.btnautog {
    background-color: darkturquoise;
}

.acc-item {
    margin-bottom: 20px;
}

.acc-item--active .acc-item__trigger {
    /*  background-color: rgb(166, 233, 202); */
}

.acc-item--active .acc-item__content {
    display: block;
    background-color: rgb(233, 231, 255);
}

.acc-item__trigger {
    /* padding: 5px; */

    /* border-bottom: 1px solid black; */
    /* position: absolute;
    left: 0%; */
}

.acc-item__content {
    /* border: 1px solid black; */
    border-top: none;
    display: none;
    width: auto;
    margin-top: 20px;
}

.learnimg {
    width: 25px;
    height: 25px;
}

.learntextmenu {
    font-size: 15px;
}
</style>