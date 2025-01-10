<template>
    <div>
        <h1>Модерация Постов</h1>
        <ul>
            <li v-for="item in items" :key="item.id">
                {{ item.content }}
                <button @click="approve(item.id)">Утвердить {{ item.id }}</button>
                <button @click="block(item.id)">Заблокировать</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.fetchItems();
    },
    methods: {
        async fetchItems() {
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/api/moderation`);
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
                }
                this.items = await response.json();
            } catch (error) {
                console.error('Ошибка при загрузке постов:', error);
            }
        },
        async approve(id) {
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/api/moderation/approve/${id}`, { method: 'POST' });
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
                }
                await this.fetchItems();
            } catch (error) {
                console.error(`Ошибка при утверждении поста с ID ${id}:`, error);
            }
        },
        async block(id) {
            try {
                const response = await fetch(`${process.env.VUE_APP_API_URL}/api/moderation/block/${id}`, { method: 'POST' });
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status} ${response.statusText}`);
                }
                await this.fetchItems();
            } catch (error) {
                console.error(`Ошибка при блокировке поста с ID ${id}:`, error);
            }
        },
    },
};
</script>
