<template>
    <div class="flex gap-4 mb-4">
        <!-- <el-input v-model="value1" type="date" style="width: 240px" placeholder="Pick a date" :prefix-icon="Calendar" /> -->
        <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :prefix-icon="Calendar"
            style="width: 17%;" />
        <!-- placeholder="Pick a day"
        :prefix-icon="Calendar" -->
        <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Please input"
            @select="handleSelect" style="width: 17%; margin-left: 1%;" :prefix-icon="Search" />
        <el-button type="primary" :icon="Search" style="margin-left: 1%;">搜索</el-button>
        <el-button type="primary" :icon="Plus" style="margin-right: 12%;"
            @click="dialogFormVisible = true">添加</el-button>
    </div>
    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
        <el-form :model="form" style="max-width: 600px">
            <el-form-item label="Activity name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="form.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                    <el-date-picker v-model="form.date1" type="date" placeholder="Pick a date" style="width: 100%" />
                </el-col>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="form.type">
                    <el-checkbox value="Online activities" name="type">
                        Online activities
                    </el-checkbox>
                    <el-checkbox value="Promotion activities" name="type">
                        Promotion activities
                    </el-checkbox>
                    <el-checkbox value="Offline activities" name="type">
                        Offline activities
                    </el-checkbox>
                    <el-checkbox value="Simple brand exposure" name="type">
                        Simple brand exposure
                    </el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="form.resource">
                    <el-radio value="Sponsor">Sponsor</el-radio>
                    <el-radio value="Venue">Venue</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit, dialogFormVisible = false">Create</el-button>
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import { Calendar, Plus, Search } from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
const dialogFormVisible = ref(false)
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

const state = ref('')

interface LinkItem {
    value: string
    link: string
}

const links = ref<LinkItem[]>([])

const loadAll = () => {
    return [
        { value: 'vue', link: 'https://github.com/vuejs/vue' },
        { value: 'element', link: 'https://github.com/ElemeFE/element' },
        { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
        { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
        { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
        { value: 'babel', link: 'https://github.com/babel/babel' },
    ]
}

let timeout: ReturnType<typeof setTimeout>
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
    const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value

    clearTimeout(timeout)
    timeout = setTimeout(() => {
        cb(results)
    }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
    return (restaurant: LinkItem) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
    }
}

const handleSelect = (item: Record<string, any>) => {
    console.log(item)
}

onMounted(() => {
    links.value = loadAll()
})

const value1 = ref('')
</script>
