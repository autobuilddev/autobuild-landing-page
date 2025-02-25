import React from 'react';
import {
  Activity,
  Dumbbell,
  BarChart2,
  Clock,
  Calendar,
  ChevronRight,
} from 'lucide-react';

const WorkoutBuddyPreview = () => {
  return (
    <div className="w-full h-full bg-gray-900 p-4 flex flex-col overflow-y-auto">
      {/* App header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Dumbbell className="h-5 w-5 text-purple-500 mr-2" />
          <h3 className="text-white font-semibold">WorkoutBuddy</h3>
        </div>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Progress chart */}
      <div className="bg-gray-800 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <BarChart2 className="h-4 w-4 text-purple-400 mr-2" />
            <h4 className="text-white font-medium text-sm">Weekly Progress</h4>
          </div>
          <span className="text-xs text-purple-400">+12% this week</span>
        </div>

        {/* Chart */}
        <div className="flex items-stretch pt-4 h-24 space-x-2 mb-1">
          {/* Monday */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-sm h-full relative">
              <div
                className="bg-purple-500 absolute bottom-0 w-full rounded-sm"
                style={{ height: '32%' }}
              ></div>
              <div className="absolute -top-5 w-full text-[10px] text-purple-400 text-center">
                320
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">M</span>
          </div>

          {/* Tuesday */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-sm h-full relative">
              <div
                className="bg-purple-500 absolute bottom-0 w-full rounded-sm"
                style={{ height: '54%' }}
              ></div>
              <div className="absolute -top-5 w-full text-[10px] text-purple-400 text-center">
                540
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">T</span>
          </div>

          {/* Wednesday */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-sm h-full relative">
              <div
                className="bg-purple-500 absolute bottom-0 w-full rounded-sm"
                style={{ height: '41%' }}
              ></div>
              <div className="absolute -top-5 w-full text-[10px] text-purple-400 text-center">
                410
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">W</span>
          </div>

          {/* Thursday */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-sm h-full relative">
              <div
                className="bg-purple-500 absolute bottom-0 w-full rounded-sm"
                style={{ height: '68%' }}
              ></div>
              <div className="absolute -top-5 w-full text-[10px] text-purple-400 text-center">
                680
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">T</span>
          </div>

          {/* Friday */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-sm h-full relative">
              <div
                className="bg-purple-500 absolute bottom-0 w-full rounded-sm"
                style={{ height: '45%' }}
              ></div>
              <div className="absolute -top-5 w-full text-[10px] text-purple-400 text-center">
                450
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">F</span>
          </div>

          {/* Saturday */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-sm h-full relative">
              <div
                className="bg-teal-500 absolute bottom-0 w-full rounded-sm"
                style={{ height: '59%' }}
              ></div>
              <div className="absolute -top-5 w-full text-[10px] text-teal-400 text-center">
                590
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">S</span>
          </div>

          {/* Sunday */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full bg-gray-700 rounded-sm h-full relative">
              <div
                className="bg-gray-600 absolute bottom-0 w-full rounded-sm"
                style={{ height: '6%' }}
              ></div>
              <div className="absolute -top-5 w-full text-[10px] text-gray-400 text-center">
                60
              </div>
            </div>
            <span className="text-xs text-gray-400 mt-1">S</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between mt-2 pt-2 border-t border-gray-700">
          <div>
            <p className="text-xs text-gray-400">Workouts</p>
            <p className="text-sm text-white font-medium">6</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Calories</p>
            <p className="text-sm text-white font-medium">2,450</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Time</p>
            <p className="text-sm text-white font-medium">5h 30m</p>
          </div>
        </div>
      </div>

      {/* Today's workout */}
      <div className="bg-gray-800 rounded-lg p-3 mt-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-teal-400 mr-2" />
            <h4 className="text-white font-medium text-sm">Today's Workout</h4>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 text-teal-400 mr-1" />
            <span className="text-xs text-teal-400">45 min</span>
          </div>
        </div>

        {/* Exercises */}
        <div className="space-y-2">
          <div className="flex items-center bg-gray-700 rounded-md p-2">
            <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
              <Dumbbell className="h-4 w-4 text-purple-400" />
            </div>
            <div className="flex-1">
              <h5 className="text-white text-xs font-medium">Bench Press</h5>
              <p className="text-gray-400 text-xs">3 sets × 10 reps</p>
            </div>
            <div className="bg-teal-500 text-xs text-white px-2 py-1 rounded">
              Done
            </div>
          </div>

          <div className="flex items-center bg-gray-700 rounded-md p-2">
            <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center mr-3">
              <Activity className="h-4 w-4 text-purple-400" />
            </div>
            <div className="flex-1">
              <h5 className="text-white text-xs font-medium">Squats</h5>
              <p className="text-gray-400 text-xs">4 sets × 12 reps</p>
            </div>
            <div className="border border-gray-600 text-xs text-gray-400 px-2 py-1 rounded">
              Next
            </div>
          </div>

          <div className="flex items-center justify-center mt-2">
            <span className="text-xs text-teal-400 flex items-center">
              View full workout
              <ChevronRight className="h-3 w-3 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutBuddyPreview;
