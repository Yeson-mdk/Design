<template>
    <TitlePage />
    <SearchForKeywords style="margin-top: 2%;" />
    <UserTable style="margin-top: 2%;" />
</template>

<script>
import TitlePage from './TitlePage.vue';
import SearchForKeywords from './SearchForKeywords.vue';
import UserTable from './UserTable.vue';
export default {
    components: {
        SearchForKeywords,
        TitlePage,
        UserTable
    },
}

</script>


<style></style>