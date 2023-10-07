import * as React from "react";
const page = require("../components/scss/page.module.scss");
import { Radar, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  CategoryScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

interface skillModel {
  readable?: number,
  canWrite?: number,
  usable: number,
};

const LangSkill: { [title: string]: skillModel } = {
  JavaScript: {
    readable: 10,
    canWrite: 8,
    usable: 7,
  },
  TypeScript: {
    readable: 10,
    canWrite: 8,
    usable: 5
  },
  HTML5: {
    readable: 10,
    canWrite: 8,
    usable: 5
  },
  'C#': {
    readable: 6,
    canWrite: 4,
    usable: 4
  },
  CSS3: {
    readable: 10,
    canWrite: 5,
    usable: 5
  },
  Python: {
    readable: 6,
    canWrite: 4,
    usable: 3
  },
  ShellScript: {
    readable: 4,
    canWrite: 3,
    usable: 4
  },
};

const LangColor: {[title: string]: string} = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML5: '#E34F26',
  'C#': '#239120',
  CSS3: '#1572B6',
  Python: '#3776AB',
  ShellScript: '#000',
};

const FrameWorkSkill: { [title: string]: skillModel } = {
  Git: {
    usable: 7
  },
  Docker: {
    usable: 5
  },
  Angular: {
    usable: 5
  },
  '.NET Core': {
    usable: 4
  },
  'Express.js': {
    usable: 5
  },
  'Next.js': {
    usable: 3
  },
  'Nuxt.js': {
    usable: 2
  },
  'Gatsby.js': {
    usable: 2
  },
  flask: {
    usable: 1
  },
  Django: {
    usable: 1
  }
}


function LangSkillDatasets(): any[] {
  const result: any[] = [];
  Object.entries(LangSkill).forEach(([key, info]) => {
    result.push({
      label: key,
      data: Object.values(info),
      backgroundColor: 'transparent',
      borderColor: LangColor[key] + 'AA',
      borderWidth: 3,
    })
  })
  return result;
}



const Labels = ['読める', '書ける', '使える'];
const Data = {
  radar: {
    labels: Labels,
    datasets: LangSkillDatasets(),
  },
  horizonal: {
    labels: Object.keys(FrameWorkSkill),
    datasets: [
      {
        label: Labels[2],
        data: Object.values(FrameWorkSkill).map((x) => x.usable),
        backgroundColor: 'rgb(171, 191, 191)',
      },
    ],
  }
};

const Options = {
  radar: {
    animation: false as false,
    scales: {
      radialLinear: {
        max: 10,
        min: 0,
      }
    },
    plugins: {
      title: {
        display: true,
        text: '言語別スキル'
      },
      legend: {
        position: 'right' as 'right',
      }
    }
  },
  horizonal: {
    animation: false as false,
    responsive: true,
    indexAxis: "y" as 'y',
    barPercentage: 0.5,
    scales: {
      x: {
        min: 0,
        max: 10,
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'フレームワーク別スキル'
      },
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      }
    }
  }
};

const SkillPage = () => {
  return (
    <div className={page.display}>
      <div className={page.border}></div>
      <article>
        <h2 className={page.title}>スキル</h2>
        <div className={page.skill_block}>
          <Radar data={Data.radar} options={Options.radar} />
          <Bar data={Data.horizonal} options={Options.horizonal}></Bar>
          <p className={page.small}>※ 1: ドキュメント見ながらつくれる, 10: ほかのひとに説明できるレベルで使いこなせる</p>
        </div>
      </article>
    </div>
  )
};

export default SkillPage
