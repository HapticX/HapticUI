<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://psv4.userapi.com/c237331/u367316021/docs/d30/e8286f4fd4b6/1.jpg?extra=1GmqQIAnGhb-OTm_totlbfyMGZ3xhpXxLUYeZOSaKi4MLGcB_y8mXRUSMAQkVpq6HbcthAIUo4f7_J5ohlUmSgUe-uutxHEam0SEenpEe9V99pffp7X5dxvhnOvYo7PpzVy4GplCBv4BA3bSgocYc2U',
    name: 'Morozov Vadim',
    title: 'Development',
    links: [
      { icon: 'github', link: 'https://github.com/horanchikk' },
    ]
  },
  {
    avatar: 'https://psv4.userapi.com/c237331/u367316021/docs/d59/d9349c713f7d/2.jpg?extra=Ie1LrUibe4ExuM3JHmNqja8y_JscKshY4djNlv9cjFOQU1vDt8xzpAEXBpdx3xNOW6v4PGTna1HUx5JnCJZp6_Dw3cMwotyjKBeqS71xNzPJVwWbT-NV5OhggOBi6_rFpFDxp92KKwQ7Hy0pRYCiRn8',
    name: 'Fomin Nikita',
    title: 'Design & development',
    links: [
      { icon: 'github', link: 'https://github.com/ethosa' },
    ]
  },
]
</script>

<style>
:root {
  --vp-c-green: #9868BF;
  --vp-c-green-light: #B179DF;
  --vp-c-green-lighter: #CA8AFF;
  --vp-c-green-dark: #7E569F;
  --vp-c-green-darker: #654580;
  --vp-c-green-dimm-1: rgba(152, 104, 191, 0.05);
  --vp-c-green-dimm-2: rgba(152, 104, 191, 0.2);
  --vp-c-green-dimm-3: rgba(152, 104, 191, 0.5);
}

.VPTeamMembersItem.small .avatar[data-v-7735210d] {
  width: 120px;
  height: 120px;
}

</style>

# Our Team

Say <code>h e l l o</code> to HapticX team :eyes:

<VPTeamMembers size="small" :members="members" />
