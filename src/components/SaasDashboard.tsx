import { useState } from 'react';

export default function SaasDashboard() {
  const [activeTab, setActiveTab] = useState<'projects' | 'tasks' | 'analytics'>('projects');

  const projects = [
    { name: 'Website Redesign', progress: 75, tasks: 12, team: 4 },
    { name: 'Mobile App', progress: 45, tasks: 28, team: 6 },
    { name: 'Backend API', progress: 90, tasks: 5, team: 3 },
  ];

  const tasks = [
    { id: 1, title: 'Design Homepage', status: 'Done', priority: 'High', assignee: '👩‍💼' },
    { id: 2, title: 'Set up Database', status: 'In Progress', priority: 'High', assignee: '👨‍💻' },
    { id: 3, title: 'API Documentation', status: 'In Review', priority: 'Medium', assignee: '👩‍🎨' },
    { id: 4, title: 'User Testing', status: 'Todo', priority: 'Medium', assignee: '👨‍💼' },
  ];

  const stats = [
    { label: 'Active Projects', value: '12', icon: '📊', color: 'blue' },
    { label: 'Team Members', value: '24', icon: '👥', color: 'purple' },
    { label: 'Tasks Completed', value: '156', icon: '✅', color: 'green' },
    { label: 'Avg Completion', value: '87%', icon: '⚡', color: 'orange' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Done':
        return 'bg-green-500/20 text-green-400';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400';
      case 'In Review':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Todo':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="w-full">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-2">Dashboard</h2>
        <p className="text-gray-400">Welcome back! Here's what's happening with your projects.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <div key={i} className="tech-card p-6 hover:border-blue-600/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-xs font-bold text-gray-600 uppercase">{stat.label}</span>
            </div>
            <div className="text-3xl font-bold text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-2 border-b border-gray-700">
        {['projects', 'tasks', 'analytics'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-6 py-3 font-bold uppercase text-xs tracking-widest transition-all ${
              activeTab === tab
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            {tab === 'projects' && '📁 Projects'}
            {tab === 'tasks' && '✓ Tasks'}
            {tab === 'analytics' && '📈 Analytics'}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'projects' && (
        <div className="space-y-4">
          {projects.map((project, i) => (
            <div key={i} className="tech-card p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                  <div className="flex gap-4 text-sm text-gray-400">
                    <span>📋 {project.tasks} tasks</span>
                    <span>👥 {project.team} members</span>
                  </div>
                </div>
                <span className="text-2xl font-bold text-blue-600">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'tasks' && (
        <div className="space-y-2">
          {tasks.map((task) => (
            <div key={task.id} className="tech-card p-4 flex items-center justify-between hover:border-blue-600/50 transition-all cursor-pointer">
              <div className="flex items-center gap-4 flex-1">
                <span className="text-2xl">{task.assignee}</span>
                <div>
                  <h4 className="font-bold">{task.title}</h4>
                  <span className={`inline-block text-xs px-2 py-1 rounded mt-1 ${
                    task.priority === 'High' ? 'bg-red-500/20 text-red-400' :
                    task.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {task.priority} Priority
                  </span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'analytics' && (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Chart 1 */}
          <div className="tech-card p-6">
            <h3 className="font-bold mb-6">Projects Completion Rate</h3>
            <div className="space-y-4">
              {projects.map((project, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">{project.name}</span>
                    <span className="text-sm font-bold text-blue-600">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-blue-400 h-1.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2 */}
          <div className="tech-card p-6">
            <h3 className="font-bold mb-6">Team Activity</h3>
            <div className="space-y-6">
              {[
                { member: 'Alice Dupont', tasks: 12, color: 'bg-blue-600' },
                { member: 'Bob Martin', tasks: 8, color: 'bg-purple-600' },
                { member: 'Claire Leblanc', tasks: 15, color: 'bg-green-600' },
                { member: 'David Chen', tasks: 10, color: 'bg-orange-600' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">{item.member}</span>
                    <span className="text-sm font-bold text-white">{item.tasks}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`${item.color} h-2 rounded-full`}
                      style={{ width: `${(item.tasks / 15) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="tech-card p-6">
            <h3 className="font-bold mb-4">Performance</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Task Time</span>
                <span className="font-bold">2.3 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">On-time Delivery</span>
                <span className="font-bold text-green-400">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Team Velocity</span>
                <span className="font-bold text-blue-400">+15%</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="tech-card p-6">
            <h3 className="font-bold mb-4">Recent Activity</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>Website Redesign completed</span>
              </div>
              <div className="flex gap-2">
                <span className="text-blue-400">◆</span>
                <span>Mobile App moved to review</span>
              </div>
              <div className="flex gap-2">
                <span className="text-yellow-400">●</span>
                <span>API Documentation started</span>
              </div>
              <div className="flex gap-2">
                <span className="text-purple-400">◆</span>
                <span>New team member added</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Try Now CTA */}
      <div className="mt-12 tech-card p-8 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <h3 className="text-2xl font-bold mb-3">Ready to Take Control?</h3>
        <p className="text-gray-400 mb-6">
          Try our SaaS platform now and see how to manage your projects like a pro.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 font-bold rounded-md transition-all duration-300"
        >
          Start Free Trial
        </a>
      </div>
    </div>
  );
}
