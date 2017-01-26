setInterval(() => {
    const result = $('.search-result__finded-users').not('._prcsd')
    if (result.length > 0) {
        result.addClass('_prcsd')
        $('.search-result__finded-users')
            .find('.search-result__user-wrapper')
            .each((i, el) => {
                const user = angular.element(el).scope().user
                // console.log(user)
                const info = $(`
                    <ul class="add-info">
                        <li><a target="_blank" href="http://vk.com/id${user.user_id}">
                            ${user.first_name} ${user.last_name}
                        </a></li>
                    <li>Similarity: ${ Math.round(user.similarity * 1000) / 1000}</li>
                    </ul>
                `)
                $(el).append(info)
            })
    }
}, 500)
