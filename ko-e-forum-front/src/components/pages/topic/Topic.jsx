import Button from '../../button/Button';

function Topic() {
    function viewTopic() {
        const oi = 'oi';
    }
    function fetchTopics() {
        const topics = []
        for (topic in topics) {
            <>
                <h2>{topic.title}</h2>
                <Button text="Visualizar tópico" event="onClick" funct={() => viewTopic()} />
            </>
        }
    }
    function createTopic() {
        return;
    }
    return (
        <>
            <h2>Tópicos relacionados ao jogo KillerOpil - Escape</h2>
            {fetchTopics()}
            <Button text="Meus tópicos" event="onClick" funct={() => createTopic()} />
        </>
    );
}

export default Topic;
