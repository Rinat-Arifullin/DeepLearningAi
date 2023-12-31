import dotenv from "dotenv";
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.API_KEY
});

const getCompletions = async (prompt, model = 'gpt-3.5-turbo', role = 'user') => {
    const messages = [{role, content: prompt}];

    const response = await openai.chat.completions.create({
        model,
        messages,
    })

    return response.choices[0].message.content
}
const factSheetChair = `ОБЗОР
- Часть прекрасного семейства офисной мебели в стиле средневековья,
включая картотечные шкафы, письменные столы, книжные стеллажи, столы для совещаний и многое другое.
- Несколько вариантов цвета корпуса и базовой отделки.
- Доступны с пластиковой обивкой спинки и передней части (SWC-100)
или с полной обивкой (SWC-110) в 10 вариантах ткани и 6 вариантах кожи.
- Варианты базовой отделки: нержавеющая сталь, матово-черный,
глянцево-белый или хром.
- Кресло доступно как с подлокотниками, так и без них.
- Подходит для домашнего или делового использования.
- Подходит для использования по контракту.

СТРОИТЕЛЬСТВО
- 5-колесное алюминиевое основание с пластиковым покрытием.
- Пневматическая регулировка кресла для легкого подъема / опускания.

РАЗМЕРЫ
- ШИРИНА 53 см | 20,87 дюйма
- ГЛУБИНА 51 СМ | 20,08 ДЮЙМА
- ВЫСОТА 80 СМ | 31,50 дюйма
- ВЫСОТА СИДЕНЬЯ 44 СМ| 17,32 дюйма
- ГЛУБИНА СИДЕНЬЯ 41 см | 16,14”

ОПЦИИ
- Варианты с мягким или твердым полом.
- Два варианта плотности пенопласта для сидений: 
 средняя (1,8 фунта/фут3) или высокая (2,8 фунта/фут3)
- Подлокотники без подлокотников или 8-позиционные подлокотники из полиуретана 

МАТЕРИАЛЫ
ПЛАНЕР-ОСНОВА КОРПУСА
- Литой алюминий с модифицированным нейлоновым покрытием PA6/PA66.
- Толщина корпуса: 10 мм.
сиденье
- Пена HD36

СТРАНА ПРОИЗВОДИТЕЛЯ
- Италия
`


const prompt = `Ваша задача - помочь маркетинговой команде создать описание продукта для розничного веб
                - сайта на основе технического информационного бюллетеня.
                Напишите описание продукта на основе информации, представленной в технических спецификациях,
                разделенных тройными обратными галочками.
                
                Описание предназначено для розничных продавцов мебели,
                поэтому должно носить технический характер и фокусироваться на
                материалах, из которых изготовлено изделие.
                
                В конце описания укажите каждый 7-значный символ
                Идентификатор продукта в технической спецификации.
                
                Используй не больше 3 предложений.
                
                После описания включите таблицу, в которой указаны размеры
                изделия. Таблица должна состоять из двух столбцов.
                В первом столбце укажите название размера. 
                Во втором столбце укажите размеры только в дюймах.

                Дайте таблице название "Размеры изделия".

                Отформатируйте все в формате HTML, который можно использовать на веб-сайте. 
                Поместите описание в элемент <div>.
                
                Технические характеристики: \`\`\`${factSheetChair}\`\`\``

getCompletions(prompt).then((response)=>{
    console.log(response)
}).catch(error=>{
    console.log({error})
})