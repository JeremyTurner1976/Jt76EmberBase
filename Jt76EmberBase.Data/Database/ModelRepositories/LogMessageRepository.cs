using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using Jt76EmberBase.Data.Abstract;
using Jt76EmberBase.Data.Models;

namespace Jt76EmberBase.Data.Database.ModelRepositories
{
    //Production (TimedService) 
    //Calls this web.config db and runs procs to run db maintenance daily

    public interface ILogMessageRepository
    {
        bool Save();
        IQueryable<LogMessage> GetLogMessages();
        bool AddLogMessage(LogMessage logMessage, bool bSave);
        bool UpdateLogMessage(LogMessage logMessage, bool bSave);
        bool DeleteLogMessage(int id, bool bSave);
    }

    public class LogMessageRepository : ModelRepositoryBase, ILogMessageRepository
    {
        private readonly Jt76DbContext _context;

        public LogMessageRepository(Jt76DbContext context)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            _context = context;
        }

        public bool Save()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //return that a change was made
            return (_context.SaveChanges() > 0);
        }

        public IQueryable<LogMessage> GetLogMessages()
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            return _context.LogMessages;
        }

        public bool AddLogMessage(LogMessage logMessage, bool bSave)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //want to force this to hit the db if the model is invalid
            logMessage = (LogMessage) logMessage.ForceValidData();

            _context.LogMessages.Add(logMessage);
            return !bSave || Save();
        }

        public bool UpdateLogMessage(LogMessage item, bool bSave)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);

            //want to force this to hit the db if the model is invalid
            item = (LogMessage)item.ForceValidData();

            var oldItem = _context.LogMessages.FirstOrDefault(x => x.Id == item.Id);
            if (oldItem != null && oldItem.Id != default(int))
            {
                _context.LogMessages.Remove(oldItem);
                _context.LogMessages.Add(item);
                return !bSave || Save();
            }
            else
                return false;
        }

        public bool DeleteLogMessage(int id, bool bSave)
        {
            Debug.WriteLine(GetType().FullName + "." + MethodBase.GetCurrentMethod().Name);
            var item = _context.LogMessages.FirstOrDefault(x => x.Id == id);
            if (item != null && item.Id != default(int))
            {
                _context.LogMessages.Remove(item);
                return !bSave || Save();
            }
            else
                return false;
        }
    }
}